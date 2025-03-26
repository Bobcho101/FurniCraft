export function checkForEmptyField(formData) {
    for(let [, value] of Object.entries(formData)) {
        if(value.trim() === "") {
            return true;
        } 
    }
    return false;
}