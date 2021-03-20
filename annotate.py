import torch

import os
import json

ASSETS = "src/assets/imgs"


def run():
    eske = os.listdir(os.path.join(ASSETS, "eske"))
    rane = os.listdir(os.path.join(ASSETS, "rane"))
    with open(os.path.join(ASSETS, "..", "raneellereske.json"), "w", encoding="utf-8") as f:
        json.dump({ "eske": eske, "rane": rane }, f, indent=4)

if __name__ == "__main__":
    run()

