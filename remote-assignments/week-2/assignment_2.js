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
// caculate({op:'+',n1:3, n2:4});

// //way2
// const args = new Object();
// args.op='+';
// args.n1= 1 ;
// args.n2= 9 ;
// caculate(args);

//way3
// const args= {
//     op:'+',
//     n1: 1 ,
//     n2: 9 ,
// };
args['op'] = '-';
args['n1'] = 1 ;
args['n2'] = 9 ;
caculate(args);
