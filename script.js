let postComment = function() {
    let displayName = $('#displayName').val();
    let comment = $('#postComment').val();    
    
    if (displayName !== "" && comment !== "") {

        let newComment = '<div class="comment">';
        newComment += '<div>';
        newComment += '<img src="anonymous-avatar-icon-19.png"/>';
        newComment += '</div>';
        newComment += '<div id="commentContainer">';
        newComment += '<h4>' + displayName + '</h4>';
        newComment += '<h2>' + comment + '</h2>';
        newComment += '<div class="hide">';
        newComment += '<div class="flexed" style="width: 100%;">'; 
        newComment += '<div id="editInputContainer">';
        newComment += '<input id="editInput" type="text" placeholder="Edit..." style="width: 100%;">';
        newComment += '</div>';
        newComment += '<div id="editSubmit">';
        newComment += 'Submit';
        newComment += '</div>';
        newComment += '</div>';
        newComment += '</div>';
        newComment += '</div>';
        newComment += '<div id="editAndDelete">';
        newComment += '<div id="edit">';
        newComment += 'Edit';
        newComment += '</div>';
        newComment += '<div id="delete">';
        newComment += 'Delete';
        newComment += '</div>';
        newComment += '</div>';
        newComment += '</div>';

        $("#comments").prepend(newComment);

        $('#displayName').val("");
        $('#postComment').val("");
    }
    else {
        alert("Display Name and Comment required!");
    }
};

$("#postSubmit").on("click", postComment);

$("#comments").on("click", "#edit", function() {
    let post = $(this).parents('.comment');
    let currentComment = post.find('h2').text();
    post.find('#editInput').val(currentComment);
    post.find('.hide').toggle(); 

    if($(this).text() === "Cancel") {
        $(this).text("Edit");
    }
    else {
        $(this).text("Cancel");
    }
});

$("#comments").on("click", "#delete", function() {
    $(this).parents('.comment').remove();
}); 

$("#comments").on("click", "#editSubmit", function() {
    updateComment($(this));
});

let updateComment = function(elem) {
    let post = $(elem).parents('.comment');
    let newComment = $(elem).parent().find("#editInput").val();
    if(newComment !== "") {
        $(elem).parents('.comment').find('h2').text(newComment);
        post.find('.hide').toggle();

        post.find('#edit').text("Edit");
    }
    else {
        alert("Comment must have text.");
    }
};

$('#postComment').on("keypress", function(e) { 
    let key = e.which;
    if (key === 13) { //enter key
        postComment();
    }
});

$("#comments").on("keypress", "#editInput", function(e) { 
    let key = e.which;
    if (key === 13) { //enter key
        updateComment($(this));
    }
}); 