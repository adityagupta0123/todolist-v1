

exports.getDate = function() {
    
    const today = new Date();

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    const day = today.toLocaleDateString("en-US", option);

    return day;
}

exports.getDay = function() {
    
    const today = new Date();

    const option = {
        weekday: "long",
    };

    const day = today.toLocaleDateString("en-US", option);

    return day;

}
