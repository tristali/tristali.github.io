function caculate(args) {
    let result;
    if (args.op === "+") {
        result = args.n1 + args.n2;
    } else if (args.op === "-") {
        result = args.n1 - args.n2;
    } else {
        result = "Not supported";
    }
    console.log(result);
    return result;
}

//way1
caculate({op:'+',n1:3, n2:4});

// //way2
const args1 = new Object();
args1.op='+';
args1.n1= 1 ;
args1.n2= 9 ;
caculate(args1);

// way3
const args2= {
    op:'-',
    n1: 1 ,
    n2: 9 ,
};
caculate(args2);
