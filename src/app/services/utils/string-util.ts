export class StringUtil{
    static isUndefinedOrEmpty(value){
        if(value === undefined || value === ''.trim()){
            return true;            
        }
        return false;
    }

    static isUndefinedOrEmptyOrNull(value){
        if(this.isUndefinedOrEmpty(value) || value == null){
            return true;            
        }
        return false;
    }
}