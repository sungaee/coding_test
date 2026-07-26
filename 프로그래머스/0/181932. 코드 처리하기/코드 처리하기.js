function solution(code) {
    let mode = 0;
    let ret = '';
    
    for(let idx=0; idx < code.length; idx++){
        const ch = code[idx];
        
        if(ch === "1"){
            mode = mode === 0 ? 1 : 0;
        } else{
            if(mode === 0 && idx % 2 === 0){
                ret += ch;
            }else if( mode === 1 && idx % 2 === 1){
                ret += ch;
            }
        }
    }
        return ret===''?"EMPTY" : ret;
}