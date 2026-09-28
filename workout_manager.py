#!/usr/bin/env python3
"""
FitBuddy Workout Manager & CLI Utility
Manage, display, export, and track your 7-Day High-Intensity Workout Plan.
Uses only Python standard library — zero external dependencies needed!
"""

import argparse
import datetime
import json
import os
import sys

# Complete 7-Day Workout Dataset
PLAN_DATA = {
    "title": "7-Day High-Intensity Workout Plan for Fat Loss & Muscle Gain",
    "description": (
        "This plan focuses on compound exercises to maximize calorie burn and muscle engagement. "
        "Remember to adjust the intensity based on your fitness level and consult a doctor before starting "
        "any new workout routine. Proper nutrition is crucial for achieving your goals, so ensure you're "
        "supporting your training with a healthy diet."
    ),
    "days": [
        {
            "id": 1,
            "title": "Day 1: Upper Body Strength",
            "category": "Strength",
            "warmup": "Jumping jacks (60 seconds), high knees (30 seconds), arm circles (forward and backward, 30 seconds each), dynamic stretches like arm swings and torso twists (1 min).",
            "exercises": [
                {"name": "Barbell Bench Press", "sets": "3 sets of 8-12 reps", "target": "Chest & Triceps"},
                {"name": "Pull-ups (or Lat Pulldowns)", "sets": "3 sets of 8-12 reps", "target": "Upper Back & Biceps"},
                {"name": "Overhead Press", "sets": "3 sets of 8-12 reps", "target": "Shoulders & Core"},
                {"name": "Barbell Rows", "sets": "3 sets of 8-12 reps", "target": "Back & Lats"},
                {"name": "Dumbbell Bicep Curls", "sets": "3 sets of 10-15 reps", "target": "Biceps"},
                {"name": "Dumbbell Triceps Extensions", "sets": "3 sets of 10-15 reps", "target": "Triceps"}
            ],
            "cooldown": "Static stretches holding each for 30 seconds (chest, back, biceps, triceps, shoulders)."
        },
        {
            "id": 2,
            "title": "Day 2: Lower Body & Core",
            "category": "Lower Body",
            "warmup": "Bodyweight squats (15 reps), lunges (10 reps per leg), glute bridges (15 reps), plank (30 seconds).",
            "exercises": [
                {"name": "Barbell Squats", "sets": "3 sets of 8-12 reps", "target": "Quads & Glutes"},
                {"name": "Romanian Deadlifts", "sets": "3 sets of 10-15 reps", "target": "Hamstrings & Glutes"},
                {"name": "Walking Lunges", "sets": "3 sets of 12-15 reps per leg", "target": "Quads & Balance"},
                {"name": "Glute Bridges", "sets": "3 sets of 15-20 reps", "target": "Glutes & Lower Back"},
                {"name": "Hanging Leg Raises", "sets": "3 sets to failure", "target": "Lower Abs"},
                {"name": "Russian Twists", "sets": "3 sets of 15-20 reps per side", "target": "Obliques"}
            ],
            "cooldown": "Foam roll quads, hamstrings, and glutes. Static stretches for hip flexors, hamstrings, and glutes (30 seconds each)."
        },
        {
            "id": 3,
            "title": "Day 3: HIIT Cardio & Core",
            "category": "Cardio & Core",
            "warmup": "Light cardio, like jogging or jumping jacks, followed by dynamic stretches.",
            "exercises": [
                {"name": "Burpees", "sets": "3 sets of 10-15 reps", "target": "Full Body Cardio"},
                {"name": "Mountain Climbers", "sets": "3 sets of 30-60 seconds", "target": "Core & Cardio"},
                {"name": "Jump Squats", "sets": "3 sets of 10-15 reps", "target": "Explosive Legs"},
                {"name": "High Plank Shoulder Taps", "sets": "3 sets of 20 taps", "target": "Core Stability"},
                {"name": "Bicycle Crunches", "sets": "3 sets of 20 reps", "target": "Abs & Obliques"}
            ],
            "cooldown": "5 minutes light walk, child's pose, cobra stretch, and seated forward reach."
        },
        {
            "id": 4,
            "title": "Day 4: Active Recovery & Mobility",
            "category": "Recovery",
            "warmup": "5 minutes gentle neck rolls, shoulder rolls, and hip openers.",
            "exercises": [
                {"name": "Brisk Walking or Light Cycling", "sets": "20-30 mins continuous", "target": "Blood Flow"},
                {"name": "World's Greatest Stretch", "sets": "3 sets of 5 reps/side", "target": "Hips & Thoracic Spine"},
                {"name": "90/90 Hip Mobility Flow", "sets": "3 sets of 8 transitions", "target": "Hip Joint Range"},
                {"name": "Cat-Cow Spine Flow", "sets": "3 sets of 10 breaths", "target": "Spine Health"},
                {"name": "Pigeon Pose", "sets": "2 sets of 45s hold/side", "target": "Deep Glute Stretch"}
            ],
            "cooldown": "Full-body foam rolling (quads, hamstrings, lats) and 5 minutes diaphragmatic breathing."
        },
        {
            "id": 5,
            "title": "Day 5: Upper Body Hypertrophy",
            "category": "Strength",
            "warmup": "Band pull-aparts (20 reps), arm swings, and 10 controlled push-ups.",
            "exercises": [
                {"name": "Incline Dumbbell Bench Press", "sets": "3 sets of 10-12 reps", "target": "Upper Chest"},
                {"name": "Seated Cable Rows", "sets": "3 sets of 10-12 reps", "target": "Lats & Rhomboids"},
                {"name": "Dumbbell Lateral Raises", "sets": "4 sets of 12-15 reps", "target": "Side Deltoids"},
                {"name": "Cable Face Pulls", "sets": "3 sets of 15 reps", "target": "Rear Delts & Posture"},
                {"name": "Dumbbell Hammer Curls", "sets": "3 sets of 12 reps", "target": "Brachialis & Forearms"},
                {"name": "Cable Tricep Pushdowns", "sets": "3 sets of 12-15 reps", "target": "Triceps"}
            ],
            "cooldown": "Chest doorframe stretch, overhead tricep stretch, and cross-arm shoulder stretch."
        },
        {
            "id": 6,
            "title": "Day 6: Lower Body Power & Conditioning",
            "category": "Lower Body",
            "warmup": "Dynamic leg swings, bodyweight squats, and glute bridge marches.",
            "exercises": [
                {"name": "Deadlifts (Conventional or Trap Bar)", "sets": "3 sets of 6-8 reps", "target": "Posterior Chain"},
                {"name": "Bulgarian Split Squats", "sets": "3 sets of 10 reps/leg", "target": "Quads & Glute Medius"},
                {"name": "Leg Press or Goblet Squats", "sets": "3 sets of 10-12 reps", "target": "Quadriceps"},
                {"name": "Standing Calf Raises", "sets": "4 sets of 15-20 reps", "target": "Calves"},
                {"name": "Plank to Push-up", "sets": "3 sets of 10-12 reps", "target": "Core & Shoulders"},
                {"name": "Dead Bug Exercise", "sets": "3 sets of 12 reps/side", "target": "Deep Core"}
            ],
            "cooldown": "Foam roll IT band, quads, and calves. Deep runner's lunge and butterfly stretch."
        },
        {
            "id": 7,
            "title": "Day 7: Full Body HIIT & Core Burnout",
            "category": "HIIT & Cardio",
            "warmup": "Jumping jacks, butt kicks, arm pulses, and high knee marches (5 mins).",
            "exercises": [
                {"name": "Kettlebell (or DB) Swings", "sets": "4 rounds of 45s work / 15s rest", "target": "Power & Caloric Burn"},
                {"name": "Box Jumps or Step-ups", "sets": "4 rounds of 45s work / 15s rest", "target": "Lower Body Power"},
                {"name": "Push-ups to Mountain Climber", "sets": "4 rounds of 45s work / 15s rest", "target": "Upper Body & Stamina"},
                {"name": "Dumbbell Thrusters", "sets": "4 rounds of 45s work / 15s rest", "target": "Full Body Metabolic"},
                {"name": "Forearm Plank Hold", "sets": "4 rounds of 45s hold / 15s rest", "target": "Core Endurance"}
            ],
            "cooldown": "10 minutes slow yoga stretches: child's pose, cobra, downward dog, and seated forward fold."
        }
    ]
}


def generate_markdown():
    """Generates clean Markdown matching the exact screenshot layout."""
    md = f"## {PLAN_DATA['title']}\n\n"
    md += f"{PLAN_DATA['description']}\n\n"

    for day in PLAN_DATA["days"]:
        md += f"**{day['title']}**\n\n"
        if "warmup" in day and day["warmup"]:
            md += f"* **Warm-up (5 mins):** {day['warmup']}\n"
        md += "* **Main Workout:**\n"
        for ex in day["exercises"]:
            md += f"  * **{ex['name']}:** {ex['sets']}\n"
        if "cooldown" in day and day["cooldown"]:
            md += f"* **Cooldown:** {day['cooldown']}\n\n"

    return md


def cmd_show(day_number=None):
    """Displays formatted workout in terminal."""
    print("=" * 68)
    print(f"  ⚡ FitBuddy: {PLAN_DATA['title']} ⚡")
    print("=" * 68)

    days_to_show = PLAN_DATA["days"]
    if day_number:
        days_to_show = [d for d in PLAN_DATA["days"] if d["id"] == day_number]
        if not days_to_show:
            print(f"[!] Day {day_number} not found. Please choose 1-7.")
            return

    for day in days_to_show:
        print(f"\n🔥 {day['title'].upper()} ({day['category']})")
        print("-" * 55)
        if "warmup" in day:
            print(f" ⏱️  Warm-up: {day['warmup']}")
        print(" 💪 Main Exercises:")
        for idx, ex in enumerate(day["exercises"], 1):
            print(f"    {idx}. {ex['name']:<30} | {ex['sets']:<24} | [{ex['target']}]")
        if "cooldown" in day:
            print(f" ❄️  Cooldown: {day['cooldown']}")
        print()


def cmd_export(output_format="md", output_file=None):
    """Exports plan to Markdown or JSON file."""
    if output_format == "md":
        filename = output_file or "WORKOUT_PLAN.md"
        content = generate_markdown()
        with open(filename, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[✓] Successfully exported workout plan to: {os.path.abspath(filename)}")
    elif output_format == "json":
        filename = output_file or "workout_data.json"
        with open(filename, "w", encoding="utf-8") as f:
            json.dump(PLAN_DATA, f, indent=2)
        print(f"[✓] Successfully exported workout plan to: {os.path.abspath(filename)}")


def cmd_bmi(weight_kg, height_cm, age=25, gender="male"):
    """Calculates BMI and nutrition recommendations."""
    height_m = height_cm / 100.0
    bmi = weight_kg / (height_m ** 2)

    if bmi < 18.5:
        category = "Underweight (Focus on calorie surplus & hypertrophy)"
    elif bmi < 24.9:
        category = "Normal / Healthy Weight (Ideal for body recomposition)"
    elif bmi < 29.9:
        category = "Overweight (Great candidate for high-intensity fat loss)"
    else:
        category = "Obesity (Prioritize low-impact cardio & balanced nutrition)"

    # Daily protein recommendation (1.8g - 2.2g per kg)
    min_protein = round(weight_kg * 1.8)
    max_protein = round(weight_kg * 2.2)

    # Basal Metabolic Rate (Mifflin-St Jeor)
    if gender.lower() == "male":
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) + 5
    else:
        bmr = (10 * weight_kg) + (6.25 * height_cm) - (5 * age) - 161

    tdee = round(bmr * 1.55)  # Moderate-to-high exercise factor

    print("=" * 55)
    print("  📊 FitBuddy Fitness & Nutrition Calculator")
    print("=" * 55)
    print(f" Height           : {height_cm} cm")
    print(f" Weight           : {weight_kg} kg")
    print(f" Calculated BMI   : {bmi:.1f} ({category})")
    print(f" Est. Maintenance : ~{tdee} kcal/day")
    print(f" Fat Loss Target  : ~{tdee - 400} kcal/day (-400 kcal deficit)")
    print(f" Muscle Gain      : ~{tdee + 300} kcal/day (+300 kcal surplus)")
    print(f" Daily Protein    : {min_protein}g - {max_protein}g per day")
    print("=" * 55)


def cmd_track(day_id):
    """Logs completed workout day to local history."""
    log_file = "workout_log.json"
    history = []
    if os.path.exists(log_file):
        try:
            with open(log_file, "r", encoding="utf-8") as f:
                history = json.load(f)
        except Exception:
            history = []

    entry = {
        "timestamp": datetime.datetime.now().isoformat(),
        "day_id": day_id,
        "date_str": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }
    history.append(entry)

    with open(log_file, "w", encoding="utf-8") as f:
        json.dump(history, f, indent=2)

    print(f"[✓] Logged completion for Day {day_id} at {entry['date_str']}!")
    print(f"[i] Total completed sessions logged: {len(history)}")


def main():
    parser = argparse.ArgumentParser(description="FitBuddy Workout CLI & Manager")
    subparsers = parser.add_subparsers(dest="command", help="Available commands")

    # Show command
    show_p = subparsers.add_parser("show", help="Display workout routine in console")
    show_p.add_argument("--day", type=int, choices=range(1, 8), help="Specific day (1-7)")

    # Export command
    export_p = subparsers.add_parser("export", help="Export plan to Markdown or JSON")
    export_p.add_argument("--format", choices=["md", "json"], default="md", help="Export format")
    export_p.add_argument("--output", type=str, help="Output file path")

    # BMI command
    bmi_p = subparsers.add_parser("bmi", help="Calculate BMI & target calories")
    bmi_p.add_argument("--weight", type=float, required=True, help="Weight in kg")
    bmi_p.add_argument("--height", type=float, required=True, help="Height in cm")
    bmi_p.add_argument("--age", type=int, default=25, help="Age in years")
    bmi_p.add_argument("--gender", choices=["male", "female"], default="male", help="Gender")

    # Track command
    track_p = subparsers.add_parser("track", help="Log a completed day")
    track_p.add_argument("--day", type=int, required=True, choices=range(1, 8), help="Day completed (1-7)")

    args = parser.parse_args()

    if args.command == "show":
        cmd_show(args.day)
    elif args.command == "export":
        cmd_export(args.format, args.output)
    elif args.command == "bmi":
        cmd_bmi(args.weight, args.height, args.age, args.gender)
    elif args.command == "track":
        cmd_track(args.day)
    else:
        # Default behavior: show day 1 and instructions
        cmd_show(1)
        print("\n💡 Tip: Run 'python workout_manager.py --help' to see all available commands.")


if __name__ == "__main__":
    main()
