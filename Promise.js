exports.Promise =  class {
    constructor(callback){
        this.resolve = (resolve)=>{
            this.isCallback(resolve,"thenCallback");
        }
        this.reject = (reject)=>{
            this.isCallback(reject,"catchCallback");
        }
        callback(this.resolve, this.reject);
    }
    isCallback(res,keyName){
        if(this[keyName]){
            this[keyName](res);
        }else {
            setTimeout(()=>{
                this.isCallback(res,keyName);
            },30);
        }
    }
    then(callback){
        this.thenCallback = callback;
        return this;
    }
    catch(callback){
        this.catchCallback = callback;
        return this;
    }
}