
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) 
{
    if (request == "toggleGitHubSidebar") 
    {
        let partialSidebar = document.getElementById("partial-discussion-sidebar");
        if (partialSidebar)
        {
            // mainParent holds the main and the sidebar panels
            const mainParent = partialSidebar.parentElement.parentElement;

            if (mainParent.attributes.oldClass) 
            {
                mainParent.setAttribute("class", mainParent.attributes.oldClass.value);
                mainParent.removeAttribute("oldClass")
            } 
            else 
            {
                mainParent.setAttribute("oldClass", mainParent.attributes.class.value)
                mainParent.setAttribute("class", "");
            }
        }
    }
});