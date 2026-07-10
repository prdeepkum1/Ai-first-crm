


from tools.log_interaction_tool import log_interaction
from tools.edit_interaction_tool import edit_interaction
from tools.search_hcp_tool import search_hcp
from tools.reminder_tool import create_reminder
from tools.summary_tool import summarize_interaction

TOOLS = [
    log_interaction,
    edit_interaction,
    search_hcp,
    create_reminder,
    summarize_interaction,
]