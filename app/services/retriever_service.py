def retrieve_context(issues):


    with open(
        "knowledge_base/coding_rules.txt",
        "r"
    ) as file:


        knowledge = file.read()



    matched_context = []


    for issue in issues:


        rule = issue.get(
            "rule",
            ""
        )


        if rule in knowledge:


            matched_context.append(
                knowledge
            )



    if matched_context:


        return "\n".join(
            matched_context
        )



    return knowledge