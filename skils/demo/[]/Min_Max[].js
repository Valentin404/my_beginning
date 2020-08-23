function Min_Max(arg){
    var num = arg[0];
    for (i = 0; i < arg.length; i++){
        if(arg[i] < num){
            num = arg[i]
        }
    }
    return num;
}