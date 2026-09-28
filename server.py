#!/usr/bin/env python3
"""
FitBuddy Local Development Server & Workout API
Serves the FitBuddy workout plan web application and provides a lightweight API.
Uses only Python standard library — zero external dependencies needed!
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import json

PORT = 8000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))


class FitBuddyHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP handler with MIME types and REST API endpoints."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # Enable CORS and caching control
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, OPTIONS")
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        super().end_headers()

    def do_GET(self):
        # API Endpoint: GET /api/status
        if self.path == "/api/status":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            status_data = {
                "status": "online",
                "app": "FitBuddy 7-Day Workout Plan",
                "version": "1.0.0",
                "days_available": 7
            }
            self.wfile.write(json.dumps(status_data, indent=2).encode("utf-8"))
            return

        # Default static file serving
        return super().do_GET()


def run_server(port=PORT):
    """Starts the HTTP server and opens the browser."""
    # Attempt port, fallback if already in use
    for candidate_port in [port, 8080, 8888, 5000]:
        try:
            with socketserver.TCPServer(("", candidate_port), FitBuddyHandler) as httpd:
                url = f"http://localhost:{candidate_port}"
                print("=" * 60)
                print("   ⚡ FitBuddy 7-Day Workout Plan Server ⚡")
                print("=" * 60)
                print(f" Serving directory : {DIRECTORY}")
                print(f" Web Application   : {url}")
                print(f" Status API        : {url}/api/status")
                print("=" * 60)
                print(" Press Ctrl+C to stop the server.")
                print("=" * 60)

                # Open browser automatically
                try:
                    webbrowser.open(url)
                except Exception:
                    pass

                httpd.serve_forever()
        except OSError as e:
            if "address already in use" in str(e).lower() or e.errno == 98 or e.errno == 10048:
                print(f" Port {candidate_port} is busy, trying next port...")
                continue
            else:
                raise e


if __name__ == "__main__":
    port_arg = int(sys.argv[1]) if len(sys.argv) > 1 and sys.argv[1].isdigit() else PORT
    try:
        run_server(port_arg)
    except KeyboardInterrupt:
        print("\n[+] FitBuddy server stopped gracefully. Have a great workout!")
        sys.exit(0)
