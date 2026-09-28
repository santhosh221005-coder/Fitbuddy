// FitBuddy - 7-Day Workout Plan Application
// State and Workout Data

const WORKOUT_DATA = {
  title: "7-Day High-Intensity Workout Plan for Fat Loss & Muscle Gain",
  description: "This plan focuses on compound exercises to maximize calorie burn and muscle engagement. Remember to adjust the intensity based on your fitness level and consult a doctor before starting any new workout routine. Proper nutrition is crucial for achieving your goals, so ensure you're supporting your training with a healthy diet.",
  days: [
    {
      id: 1,
      title: "Day 1: Upper Body Strength",
      category: "Strength",
      tagline: "Compound lifts focusing on chest, back, shoulders, and arms.",
      duration: "50-60 mins",
      calories: "380-480 kcal",
      warmup: {
        duration: "5 mins",
        exercises: [
          "Jumping jacks (60 seconds)",
          "High knees (30 seconds)",
          "Arm circles (forward and backward, 30 seconds each)",
          "Dynamic stretches like arm swings and torso twists (1 min)"
        ]
      },
      exercises: [
        { id: "d1-e1", name: "Barbell Bench Press", sets: "3 sets", reps: "8-12 reps", target: "Chest & Triceps", rest: "90s", tip: "Keep your shoulder blades retracted and elbows at a 45-degree angle." },
        { id: "d1-e2", name: "Pull-ups (or Lat Pulldowns)", sets: "3 sets", reps: "8-12 reps", target: "Upper Back & Biceps", rest: "90s", tip: "Pull with your elbows driving down toward your hips for full lat engagement." },
        { id: "d1-e3", name: "Overhead Press", sets: "3 sets", reps: "8-12 reps", target: "Shoulders & Core", rest: "90s", tip: "Squeeze glutes and brace your core tight to protect your lower back." },
        { id: "d1-e4", name: "Barbell Rows", sets: "3 sets", reps: "8-12 reps", target: "Middle Back & Lats", rest: "90s", tip: "Hinge at the hips with a flat back; pull the bar towards your lower ribcage." },
        { id: "d1-e5", name: "Dumbbell Bicep Curls", sets: "3 sets", reps: "10-15 reps", target: "Biceps", rest: "60s", tip: "Control both the concentric squeeze and the 2-second eccentric lowering." },
        { id: "d1-e6", name: "Dumbbell Triceps Extensions", sets: "3 sets", reps: "10-15 reps", target: "Triceps", rest: "60s", tip: "Keep your elbows pinned close to your head without flaring outward." }
      ],
      cooldown: {
        duration: "5-7 mins",
        notes: "Static stretches holding each for 30 seconds (chest, back, biceps, triceps, shoulders)."
      }
    },
    {
      id: 2,
      title: "Day 2: Lower Body & Core",
      category: "Lower Body",
      tagline: "High-burn lower body compound movements and functional core stability.",
      duration: "50-60 mins",
      calories: "450-550 kcal",
      warmup: {
        duration: "5 mins",
        exercises: [
          "Bodyweight squats (15 reps)",
          "Lunges (10 reps per leg)",
          "Glute bridges (15 reps)",
          "Plank (30 seconds)"
        ]
      },
      exercises: [
        { id: "d2-e1", name: "Barbell Squats", sets: "3 sets", reps: "8-12 reps", target: "Quads & Glutes", rest: "90-120s", tip: "Descend until hip crease is below knees, drive through mid-foot." },
        { id: "d2-e2", name: "Romanian Deadlifts", sets: "3 sets", reps: "10-15 reps", target: "Hamstrings & Glutes", rest: "90s", tip: "Push hips backward with soft knees until you feel a deep hamstring stretch." },
        { id: "d2-e3", name: "Walking Lunges", sets: "3 sets", reps: "12-15 reps per leg", target: "Quads & Balance", rest: "60s", tip: "Keep torso upright and avoid letting front knee collapse inward." },
        { id: "d2-e4", name: "Glute Bridges", sets: "3 sets", reps: "15-20 reps", target: "Glutes & Lower Back", rest: "60s", tip: "Pause and squeeze glutes hard at the apex for 2 seconds." },
        { id: "d2-e5", name: "Hanging Leg Raises", sets: "3 sets", reps: "To failure", target: "Lower Abs", rest: "60s", tip: "Curl your pelvis up toward your chest, not just swinging your legs." },
        { id: "d2-e6", name: "Russian Twists", sets: "3 sets", reps: "15-20 reps per side", target: "Obliques & Core", rest: "45s", tip: "Keep chest tall and rotate your ribcage side-to-side with control." }
      ],
      cooldown: {
        duration: "5-7 mins",
        notes: "Foam roll quads, hamstrings, and glutes. Static stretches for hip flexors, hamstrings, and glutes (30 seconds each)."
      }
    },
    {
      id: 3,
      title: "Day 3: HIIT Cardio & Core",
      category: "HIIT & Cardio",
      tagline: "Intense intervals to elevate heart rate and maximize post-workout calorie burn.",
      duration: "40-45 mins",
      calories: "400-520 kcal",
      warmup: {
        duration: "5 mins",
        exercises: [
          "Light cardio, like jogging or jumping jacks, followed by dynamic stretches."
        ]
      },
      exercises: [
        { id: "d3-e1", name: "Burpees", sets: "3 sets", reps: "10-15 reps", target: "Full Body & Cardio", rest: "45s", tip: "Land softly and explosively jump up with hands overhead." },
        { id: "d3-e2", name: "Mountain Climbers", sets: "3 sets", reps: "30-60 seconds", target: "Core & Heart Rate", rest: "45s", tip: "Maintain a flat plank without bouncing hips in the air." },
        { id: "d3-e3", name: "Jump Squats", sets: "3 sets", reps: "10-15 reps", target: "Explosive Legs", rest: "45s", tip: "Absorb landing smoothly into the next squat descent." },
        { id: "d3-e4", name: "Plank Shoulder Taps", sets: "3 sets", reps: "20 taps total", target: "Anti-Rotation Core", rest: "30s", tip: "Widen feet slightly to prevent hips from swaying side to side." },
        { id: "d3-e5", name: "Bicycle Crunches", sets: "3 sets", reps: "20 reps per side", target: "Abs & Obliques", rest: "30s", tip: "Drive opposite elbow to knee slowly, keeping shoulder blades elevated." },
        { id: "d3-e6", name: "Sprint Intervals", sets: "4 rounds", reps: "30s sprint / 30s walk", target: "Anaerobic Capacity", rest: "60s", tip: "Give 90%+ effort during the work interval and breathe deeply on rest." }
      ],
      cooldown: {
        duration: "5 mins",
        notes: "5 minutes slow walking, followed by child's pose, cobra stretch, and seated hamstring reach."
      }
    },
    {
      id: 4,
      title: "Day 4: Active Recovery & Mobility",
      category: "Recovery",
      tagline: "Restoration session to promote tissue repair, joint mobility, and reduce DOMS.",
      duration: "30-40 mins",
      calories: "150-220 kcal",
      warmup: {
        duration: "5 mins",
        exercises: [
          "Gentle joint rotations: neck, wrists, shoulders, hips, and ankles."
        ]
      },
      exercises: [
        { id: "d4-e1", name: "Light Aerobic Walk / Cycle", sets: "1 continuous", reps: "20-30 minutes", target: "Blood Flow & Recovery", rest: "None", tip: "Keep heart rate in Zone 1-2 (conversational pace)." },
        { id: "d4-e2", name: "World's Greatest Stretch", sets: "3 sets", reps: "5 reps per side", target: "Hips, Thoracic, Hamstrings", rest: "30s", tip: "Sink hips deep into lunge and reach top arm toward ceiling." },
        { id: "d4-e3", name: "90/90 Hip Mobility Flow", sets: "3 sets", reps: "8 transitions", target: "Internal & External Hip Rotation", rest: "30s", tip: "Keep spine tall and rotate hips with minimal hand support if possible." },
        { id: "d4-e4", name: "Cat-Cow Spine Flow", sets: "3 sets", reps: "10 breath cycles", target: "Spinal Decompression", rest: "20s", tip: "Inhale to arch spine and look up; exhale to round upper back fully." },
        { id: "d4-e5", name: "Pigeon Pose Stretch", sets: "2 sets", reps: "45-60s hold per side", target: "Glutes & Piriformis", rest: "30s", tip: "Square hips to the floor and breathe into any tight spots." }
      ],
      cooldown: {
        duration: "5 mins",
        notes: "Full body foam rolling (lats, quads, calves) and 5 minutes diaphragmatic breathing."
      }
    },
    {
      id: 5,
      title: "Day 5: Upper Body Hypertrophy",
      category: "Strength",
      tagline: "Volume-focused session targeting upper body muscle shape and definition.",
      duration: "50-55 mins",
      calories: "350-450 kcal",
      warmup: {
        duration: "5 mins",
        exercises: [
          "Resistance band pull-aparts (20 reps)",
          "Arm swings and shoulder rolls (1 min)",
          "Push-ups with pause at bottom (10 reps)",
          "Band dislocates (12 reps)"
        ]
      },
      exercises: [
        { id: "d5-e1", name: "Incline Dumbbell Bench Press", sets: "3 sets", reps: "10-12 reps", target: "Upper Chest & Delts", rest: "75s", tip: "Set bench to 30 degrees; press dumbbells up in a slight arc." },
        { id: "d5-e2", name: "Seated Cable Rows (or Barbell)", sets: "3 sets", reps: "10-12 reps", target: "Mid-Back & Rhomboids", rest: "75s", tip: "Pull handle into navel, pause 1 second while squeezing shoulder blades." },
        { id: "d5-e3", name: "Dumbbell Lateral Raises", sets: "4 sets", reps: "12-15 reps", target: "Lateral Deltoids", rest: "60s", tip: "Lead with your elbows; imagine pouring water from pitchers at top." },
        { id: "d5-e4", name: "Cable Face Pulls", sets: "3 sets", reps: "15 reps", target: "Rear Delts & Rotator Cuff", rest: "60s", tip: "Pull rope directly toward eye level with thumbs facing backward." },
        { id: "d5-e5", name: "Dumbbell Hammer Curls", sets: "3 sets", reps: "12 reps", target: "Brachialis & Forearms", rest: "60s", tip: "Keep palms facing each other throughout the full range of motion." },
        { id: "d5-e6", name: "Cable Triceps Pushdowns", sets: "3 sets", reps: "12-15 reps", target: "Triceps Lateral Head", rest: "60s", tip: "Pin upper arms against ribs; flare rope slightly at full extension." }
      ],
      cooldown: {
        duration: "5 mins",
        notes: "Doorframe chest stretch, cross-body shoulder stretch, and overhead tricep stretch (30s each)."
      }
    },
    {
      id: 6,
      title: "Day 6: Lower Body Power & Conditioning",
      category: "Lower Body",
      tagline: "Posterior chain power, unilateral stability, and metabolic burnout.",
      duration: "55-60 mins",
      calories: "480-580 kcal",
      warmup: {
        duration: "5 mins",
        exercises: [
          "Leg swings (front-to-back & side-to-side, 15 each)",
          "Deep bodyweight squat hold (45 seconds)",
          "Inchworms to plank (6 reps)",
          "Glute bridge marches (20 total)"
        ]
      },
      exercises: [
        { id: "d6-e1", name: "Deadlifts (Conventional or Trap Bar)", sets: "3 sets", reps: "6-8 reps", target: "Posterior Chain & Back", rest: "120s", tip: "Take slack out of the bar, brace core, push floor away through heels." },
        { id: "d6-e2", name: "Bulgarian Split Squats", sets: "3 sets", reps: "10 reps per leg", target: "Quads & Glute Medius", rest: "75s", tip: "Place rear foot on bench; drop straight down into front heel." },
        { id: "d6-e3", name: "Leg Press or Goblet Squats", sets: "3 sets", reps: "10-12 reps", target: "Quadriceps", rest: "90s", tip: "Avoid locking knees at the top; maintain tension throughout." },
        { id: "d6-e4", name: "Standing Calf Raises", sets: "4 sets", reps: "15-20 reps", target: "Gastrocnemius", rest: "45s", tip: "Full stretch at bottom, explosive rise onto balls of feet, hold 1s." },
        { id: "d6-e5", name: "Plank to Push-up", sets: "3 sets", reps: "10-12 reps", target: "Core & Shoulder Stability", rest: "60s", tip: "Alternate which arm initiates push-up each rep to prevent imbalance." },
        { id: "d6-e6", name: "Dead Bug Exercise", sets: "3 sets", reps: "12 reps per side", target: "Deep Core & Lumbar Control", rest: "45s", tip: "Press lower back firmly into the floor with no gap under spine." }
      ],
      cooldown: {
        duration: "6 mins",
        notes: "Foam roll IT band, quads, and calves. Deep runner's lunge and seated butterfly stretch."
      }
    },
    {
      id: 7,
      title: "Day 7: Full Body HIIT & Core Burnout",
      category: "HIIT & Cardio",
      tagline: "High-energy metabolic circuit to finish the week strong and burn maximum calories.",
      duration: "40-45 mins",
      calories: "450-550 kcal",
      warmup: {
        duration: "5 mins",
        exercises: [
          "Jumping jacks (60 seconds)",
          "Arm circles & torso twists (60 seconds)",
          "High knees & butt kicks (60 seconds)",
          "Dynamic inchworms (60 seconds)"
        ]
      },
      exercises: [
        { id: "d7-e1", name: "Kettlebell (or DB) Swings", sets: "4 rounds", reps: "45s work / 15s rest", target: "Posterior Chain & Power", rest: "15s", tip: "Snap hips forward aggressively; this is a hip hinge, not a squat." },
        { id: "d7-e2", name: "Box Jumps or Step-ups", sets: "4 rounds", reps: "45s work / 15s rest", target: "Lower Body Explosiveness", rest: "15s", tip: "Land softly with knees slightly bent; step down carefully." },
        { id: "d7-e3", name: "Push-ups to Mountain Climber", sets: "4 rounds", reps: "45s work / 15s rest", target: "Upper Body & Core Stamina", rest: "15s", tip: "1 push-up followed by 4 fast mountain climbers, repeat." },
        { id: "d7-e4", name: "Dumbbell Thrusters", sets: "4 rounds", reps: "45s work / 15s rest", target: "Full Body Metabolic Burn", rest: "15s", tip: "Use the momentum of standing up from squat to launch dumbbells overhead." },
        { id: "d7-e5", name: "Battle Ropes or Shadowboxing", sets: "4 rounds", reps: "45s work / 15s rest", target: "Cardio & Shoulder Stamina", rest: "15s", tip: "Stay low in athletic quarter squat and maintain rapid rhythm." },
        { id: "d7-e6", name: "Forearm Plank Hold", sets: "4 rounds", reps: "45s hold / 15s rest", target: "Core Bracing", rest: "60s after round", tip: "Squeeze glutes, quads, and draw belly button to spine." }
      ],
      cooldown: {
        duration: "8 mins",
        notes: "Full body relaxation stretch: child's pose, cobra, downward dog, and seated forward fold."
      }
    }
  ]
};

// Raw Markdown content matching user's screenshot
function getRawMarkdownContent() {
  let md = `## 7-Day High-Intensity Workout Plan for Fat Loss & Muscle Gain\n\n`;
  md += `${WORKOUT_DATA.description}\n\n`;

  WORKOUT_DATA.days.forEach(day => {
    md += `**${day.title}**\n\n`;
    if (day.warmup) {
      md += `* **Warm-up (${day.warmup.duration}):** ${day.warmup.exercises.join(', ')}.\n`;
    }
    md += `* **Main Workout:**\n`;
    day.exercises.forEach(ex => {
      md += `  * **${ex.name}:** ${ex.sets} of ${ex.reps}\n`;
    });
    if (day.cooldown) {
      md += `* **Cooldown:** ${day.cooldown.notes}\n\n`;
    }
  });

  return md;
}

// App State
const state = {
  currentDayId: 1, // 1-7 or 'all'
  completedExercises: new Set(),
  activeView: 'interactive', // 'interactive', 'all-days', 'raw-markdown'
  timer: {
    duration: 60,
    remaining: 60,
    intervalId: null,
    isRunning: false
  }
};

// Storage Keys
const STORAGE_KEY = 'fitbuddy_completed_v1';

// Load stored completion state
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const arr = JSON.parse(saved);
      state.completedExercises = new Set(arr);
    }
  } catch (e) {
    console.warn('Could not read from localStorage', e);
  }
}

// Save stored completion state
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(state.completedExercises)));
  } catch (e) {
    console.warn('Could not write to localStorage', e);
  }
}

// Audio notification using Web Audio API
function playChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    
    // Play a dual-tone chime
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
    osc1.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3); // A5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(440, ctx.currentTime);
    osc2.frequency.exponentialRampToValueAtTime(659.25, ctx.currentTime + 0.3);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + 1.2);
    osc2.stop(ctx.currentTime + 1.2);
  } catch (err) {
    console.log('Audio playback prevented or unsupported');
  }
}

// Format seconds into MM:SS
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

// Timer Functions
function startTimer(seconds) {
  if (seconds !== undefined) {
    state.timer.duration = seconds;
    state.timer.remaining = seconds;
  }
  
  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
  }

  state.timer.isRunning = true;
  updateTimerUI();

  state.timer.intervalId = setInterval(() => {
    if (state.timer.remaining > 0) {
      state.timer.remaining--;
      updateTimerUI();
      if (state.timer.remaining === 0) {
        clearInterval(state.timer.intervalId);
        state.timer.isRunning = false;
        state.timer.intervalId = null;
        updateTimerUI();
        playChime();
        showToast('⏰ Rest period complete! Time for the next set!');
      }
    }
  }, 1000);
}

function pauseTimer() {
  if (state.timer.intervalId) {
    clearInterval(state.timer.intervalId);
    state.timer.intervalId = null;
  }
  state.timer.isRunning = false;
  updateTimerUI();
}

function resetTimer() {
  pauseTimer();
  state.timer.remaining = state.timer.duration;
  updateTimerUI();
}

function setTimerPreset(seconds) {
  state.timer.duration = seconds;
  state.timer.remaining = seconds;
  if (state.timer.isRunning) {
    startTimer(seconds);
  } else {
    updateTimerUI();
  }
}

function updateTimerUI() {
  const display = document.getElementById('timerDisplay');
  const toggleBtn = document.getElementById('timerToggleBtn');
  const circleProgress = document.getElementById('timerProgressCircle');
  
  if (display) {
    display.textContent = formatTime(state.timer.remaining);
  }
  
  if (toggleBtn) {
    toggleBtn.innerHTML = state.timer.isRunning 
      ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg> Pause` 
      : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Start`;
    toggleBtn.className = state.timer.isRunning ? 'btn btn-secondary' : 'btn btn-primary';
  }

  if (circleProgress) {
    const total = state.timer.duration || 60;
    const progress = (state.timer.remaining / total);
    const strokeDashoffset = 283 * (1 - progress);
    circleProgress.style.strokeDashoffset = strokeDashoffset;
  }
}

// Toast notification helper
function showToast(message) {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `<span>${message}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('visible');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Calculate completion stats
function getDayStats(day) {
  const total = day.exercises.length;
  let done = 0;
  day.exercises.forEach(ex => {
    if (state.completedExercises.has(ex.id)) done++;
  });
  return { done, total, pct: Math.round((done / total) * 100) };
}

function getTotalStats() {
  let total = 0;
  let done = 0;
  WORKOUT_DATA.days.forEach(day => {
    total += day.exercises.length;
    day.exercises.forEach(ex => {
      if (state.completedExercises.has(ex.id)) done++;
    });
  });
  return { done, total, pct: Math.round((done / total) * 100) };
}

// Render Tabs Navigation
function renderTabs() {
  const container = document.getElementById('dayTabs');
  if (!container) return;

  let html = `
    <button class="day-tab ${state.currentDayId === 'all' ? 'active' : ''}" data-day="all">
      <span class="tab-label">All 7 Days</span>
      <span class="tab-badge">${getTotalStats().done}/${getTotalStats().total}</span>
    </button>
  `;

  WORKOUT_DATA.days.forEach(day => {
    const stats = getDayStats(day);
    const isComplete = stats.done === stats.total && stats.total > 0;
    html += `
      <button class="day-tab ${state.currentDayId === day.id ? 'active' : ''} ${isComplete ? 'completed-tab' : ''}" data-day="${day.id}">
        <span class="tab-num">Day ${day.id}</span>
        <span class="tab-label">${day.title.replace(`Day ${day.id}: `, '')}</span>
        <span class="tab-badge ${isComplete ? 'badge-success' : ''}">${stats.done}/${stats.total}</span>
      </button>
    `;
  });

  container.innerHTML = html;

  container.querySelectorAll('.day-tab').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayVal = btn.getAttribute('data-day');
      state.currentDayId = dayVal === 'all' ? 'all' : parseInt(dayVal, 10);
      renderTabs();
      renderContent();
    });
  });
}

// Render Single Day Card
function renderDayCard(day, isOverview = false) {
  const stats = getDayStats(day);
  const isComplete = stats.done === stats.total && stats.total > 0;

  return `
    <article class="workout-day-card ${isComplete ? 'is-complete' : ''}" id="day-card-${day.id}">
      <header class="day-header">
        <div class="day-title-meta">
          <div class="day-badge-row">
            <span class="pill pill-primary">Day ${day.id}</span>
            <span class="pill pill-muted">${day.category}</span>
            <span class="pill pill-glass"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${day.duration}</span>
            <span class="pill pill-glass"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg> ${day.calories}</span>
          </div>
          <h2 class="day-heading">${day.title}</h2>
          <p class="day-tagline">${day.tagline}</p>
        </div>

        <div class="day-progress-widget">
          <div class="progress-info">
            <span class="progress-text">${stats.done} of ${stats.total} completed</span>
            <span class="progress-pct">${stats.pct}%</span>
          </div>
          <div class="progress-bar-track">
            <div class="progress-bar-fill" style="width: ${stats.pct}%"></div>
          </div>
        </div>
      </header>

      ${day.warmup ? `
        <div class="warmup-section">
          <div class="section-title-bar">
            <span class="section-icon">🔥</span>
            <h3 class="section-title">Warm-up (${day.warmup.duration})</h3>
          </div>
          <ul class="warmup-list">
            ${day.warmup.exercises.map(item => `<li><span class="bullet">▪</span> ${item}</li>`).join('')}
          </ul>
        </div>
      ` : ''}

      <div class="exercises-section">
        <div class="section-title-bar">
          <span class="section-icon">⚡</span>
          <h3 class="section-title">Main Workout (${day.exercises.length} Exercises)</h3>
        </div>
        
        <div class="exercise-grid">
          ${day.exercises.map((ex, index) => {
            const isChecked = state.completedExercises.has(ex.id);
            return `
              <div class="exercise-item ${isChecked ? 'completed' : ''}" data-id="${ex.id}">
                <label class="exercise-checkbox-label">
                  <input type="checkbox" class="exercise-checkbox" data-id="${ex.id}" ${isChecked ? 'checked' : ''}>
                  <span class="custom-checkbox">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                </label>

                <div class="exercise-details">
                  <div class="exercise-name-row">
                    <span class="exercise-index">${index + 1}.</span>
                    <span class="exercise-name">${ex.name}</span>
                    <span class="target-chip">${ex.target}</span>
                  </div>

                  <div class="exercise-metrics">
                    <span class="metric-badge"><strong>${ex.sets}</strong></span>
                    <span class="metric-badge"><strong>${ex.reps}</strong></span>
                    <button class="timer-trigger-btn" data-rest="${parseInt(ex.rest) || 60}" title="Start ${ex.rest} rest timer">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      Rest: ${ex.rest}
                    </button>
                  </div>

                  ${ex.tip ? `<p class="exercise-tip"><span class="tip-label">Form Tip:</span> ${ex.tip}</p>` : ''}
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      ${day.cooldown ? `
        <div class="cooldown-section">
          <div class="section-title-bar">
            <span class="section-icon">❄️</span>
            <h3 class="section-title">Cooldown (${day.cooldown.duration || '5 mins'})</h3>
          </div>
          <p class="cooldown-text">${day.cooldown.notes}</p>
        </div>
      ` : ''}

      <div class="card-footer-actions">
        <button class="btn btn-ghost btn-sm reset-day-btn" data-day="${day.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
          Reset Day Progress
        </button>
        <button class="btn btn-primary btn-sm mark-all-day-btn" data-day="${day.id}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
          ${isComplete ? 'Day Finished 🎉' : 'Complete All Exercises'}
        </button>
      </div>
    </article>
  `;
}

// Render Main Content
function renderContent() {
  const contentArea = document.getElementById('workoutContentArea');
  if (!contentArea) return;

  if (state.activeView === 'raw-markdown') {
    contentArea.innerHTML = `
      <div class="raw-markdown-container">
        <div class="raw-markdown-header">
          <div class="raw-info">
            <span class="mono-badge">MARKDOWN PREVIEW</span>
            <span>Raw text identical to generated workout</span>
          </div>
          <div class="raw-actions">
            <button class="btn btn-secondary btn-sm" id="copyMarkdownBtn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
              Copy to Clipboard
            </button>
          </div>
        </div>
        <pre class="raw-markdown-content" id="rawPre">${escapeHTML(getRawMarkdownContent())}</pre>
      </div>
    `;

    document.getElementById('copyMarkdownBtn')?.addEventListener('click', () => {
      navigator.clipboard.writeText(getRawMarkdownContent()).then(() => {
        showToast('📋 Copied full workout plan markdown to clipboard!');
      });
    });
    return;
  }

  // Interactive View
  let html = '';
  
  if (state.currentDayId === 'all') {
    html += `
      <div class="all-days-view">
        <div class="all-days-banner">
          <div class="banner-text">
            <h3>Full 7-Day High-Intensity Program</h3>
            <p>Compound exercises designed for aggressive fat loss and muscular definition.</p>
          </div>
          <div class="banner-stat">
            <span class="stat-number">${getTotalStats().pct}%</span>
            <span class="stat-label">Total Completed</span>
          </div>
        </div>
        <div class="days-stack">
          ${WORKOUT_DATA.days.map(d => renderDayCard(d, true)).join('')}
        </div>
      </div>
    `;
  } else {
    const selectedDay = WORKOUT_DATA.days.find(d => d.id === state.currentDayId);
    if (selectedDay) {
      html += renderDayCard(selectedDay, false);
    }
  }

  contentArea.innerHTML = html;
  bindCardEvents();
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

// Bind checkbox and button events inside rendered cards
function bindCardEvents() {
  // Checkbox clicks
  document.querySelectorAll('.exercise-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const id = e.target.getAttribute('data-id');
      if (e.target.checked) {
        state.completedExercises.add(id);
      } else {
        state.completedExercises.delete(id);
      }
      saveState();
      renderTabs();
      renderContent();

      // Check if current day finished
      if (typeof state.currentDayId === 'number') {
        const curDay = WORKOUT_DATA.days.find(d => d.id === state.currentDayId);
        if (curDay) {
          const stats = getDayStats(curDay);
          if (stats.done === stats.total) {
            playChime();
            showToast(`🔥 Outstanding job! You crushed ${curDay.title}!`);
          }
        }
      }
    });
  });

  // Rest Timer Triggers
  document.querySelectorAll('.timer-trigger-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const restSec = parseInt(btn.getAttribute('data-rest'), 10) || 60;
      setTimerPreset(restSec);
      startTimer(restSec);
      showToast(`⏱️ Rest timer started: ${restSec}s countdown!`);
      // Scroll timer into view on mobile if needed
      const dock = document.querySelector('.timer-floating-widget');
      if (dock) dock.classList.add('pulse-highlight');
      setTimeout(() => dock?.classList.remove('pulse-highlight'), 1000);
    });
  });

  // Reset Day Button
  document.querySelectorAll('.reset-day-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dayId = parseInt(btn.getAttribute('data-day'), 10);
      const day = WORKOUT_DATA.days.find(d => d.id === dayId);
      if (day) {
        day.exercises.forEach(ex => state.completedExercises.delete(ex.id));
        saveState();
        renderTabs();
        renderContent();
        showToast(`Reset progress for Day ${dayId}. Ready to start fresh!`);
      }
    });
  });

  // Complete All Day Button
  document.querySelectorAll('.mark-all-day-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const dayId = parseInt(btn.getAttribute('data-day'), 10);
      const day = WORKOUT_DATA.days.find(d => d.id === dayId);
      if (day) {
        day.exercises.forEach(ex => state.completedExercises.add(ex.id));
        saveState();
        playChime();
        renderTabs();
        renderContent();
        showToast(`🎉 High five! Day ${dayId} marked fully completed!`);
      }
    });
  });
}

// Global UI Setup
function initUI() {
  loadState();
  renderTabs();
  renderContent();
  updateTimerUI();

  // View switchers
  const viewInteractiveBtn = document.getElementById('viewInteractiveBtn');
  const viewRawBtn = document.getElementById('viewRawBtn');

  viewInteractiveBtn?.addEventListener('click', () => {
    state.activeView = 'interactive';
    viewInteractiveBtn.classList.add('active');
    viewRawBtn?.classList.remove('active');
    renderContent();
  });

  viewRawBtn?.addEventListener('click', () => {
    state.activeView = 'raw-markdown';
    viewRawBtn.classList.add('active');
    viewInteractiveBtn?.classList.remove('active');
    renderContent();
  });

  // Timer Controls
  document.getElementById('timerToggleBtn')?.addEventListener('click', () => {
    if (state.timer.isRunning) {
      pauseTimer();
    } else {
      startTimer();
    }
  });

  document.getElementById('timerResetBtn')?.addEventListener('click', () => {
    resetTimer();
  });

  document.querySelectorAll('.timer-preset-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sec = parseInt(btn.getAttribute('data-seconds'), 10);
      document.querySelectorAll('.timer-preset-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setTimerPreset(sec);
    });
  });

  // Print Button
  document.getElementById('printPlanBtn')?.addEventListener('click', () => {
    window.print();
  });

  // Quick Reset All Button
  document.getElementById('resetAllBtn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all workout progress?')) {
      state.completedExercises.clear();
      saveState();
      renderTabs();
      renderContent();
      showToast('All workout progress reset to 0%');
    }
  });
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initUI);
} else {
  initUI();
}
