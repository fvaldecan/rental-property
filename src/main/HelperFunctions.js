export const parseTextArea = textareaValue =>{
    const clients = textareaValue.split('\n');
    if(clients.includes("")){
        alert("Not proper format! No letters, extra spaces, or special symbols allowed!");
    }else if(clients.includes(" ")){
        alert("Not proper format! No letters, extra spaces, or special symbols allowed!");
    }
    return clients;

}
