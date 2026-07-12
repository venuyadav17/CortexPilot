def retrieve_context(issues):

    with open(
        "knowledge_base/coding_rules.txt",
        "r"
    ) as file:

        content = file.read()


    sections = content.split("[")

    matched_rules = []


    for issue in issues:

        rule_name = issue.get("rule")


        for section in sections:

            if section.startswith(rule_name):

                matched_rules.append(
                    "[" + section.strip()
                )


    if matched_rules:

        return "\n\n".join(matched_rules)


    return "No additional coding guidelines found."