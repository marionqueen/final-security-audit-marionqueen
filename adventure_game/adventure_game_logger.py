import json
from flask import Flask, request, jsonify
from datetime import datetime

app = Flask(__name__)

# Simulated in-memory log of player choices
player_logs = []

@app.route("/log_choice", methods=["POST"])
def log_choice():
    data = request.get_json()
    log_entry = {
        "player": data.get("player", "anonymous"),
        "choice": data.get("choice"),
        "result": data.get("result"),
        "timestamp": datetime.utcnow().isoformat()
    }
    player_logs.append(log_entry)
    return jsonify({"status": "success", "log": log_entry}), 200

@app.route("/logs", methods=["GET"])
def get_logs():
    return jsonify(player_logs)

@app.route("/")
def home():
    return (
        "<h2>🎮 Adventure Game Logger API</h2>"
        "<p>POST to <code>/log_choice</code> with JSON: "
        '{"player": "name", "choice": "Gondola", "result": "Great ride!"}</p>'
        "<p>GET <code>/logs</code> to view saved player actions</p>"
    )

if __name__ == "__main__":
    app.run(debug=True)