

function iconHover(image) {
    var message;
    switch(image) {
        case 'search':
            message = "I will maximize your websites visibility on search engines like Google to ensure it will appear as high on the search results as possible.";
            break;

        case 'mobile':
            message = "Your website will be optimzed for a mobile first approach, meaning the experience will perfect on phones";
            break;

        case 'ui-ux':
            message = "Many websites struggle to create a seamless and intiutive interface, heavily prioritizing aesthetics. I have a user experiece first appraoch so that no one will struggle to use it.";
            break;

        case 'support':
            message = "If there are ever any technical issues with your website, I'm only an email away. I will prioritize solving the issue above all else.";
            break;

        case 'handshake':
            message = "Once the website is finished, I will ensure a painless transfer of ownership to you. You'll be able to make adjustments to your website yourself via WordPress.";
            break;
    }
    document.getElementById("icon-desc").innerHTML = message;
}