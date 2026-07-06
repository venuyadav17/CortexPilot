import json
from datetime import datetime


HISTORY_FILE = "storage/history.json"



def save_review(report):


    with open(
        HISTORY_FILE,
        "r"
    ) as file:

        history = json.load(file)



    review_record = {

        "timestamp": datetime.now().isoformat(),

        "review": report

    }



    history.append(
        review_record
    )



    with open(
        HISTORY_FILE,
        "w"
    ) as file:

        json.dump(
            history,
            file,
            indent=4
        )
        
def get_history():


    with open(
        HISTORY_FILE,
        "r"
    ) as file:


        history = json.load(file)


    return history