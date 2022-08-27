var expr: string = ""
var flag: number = 0;

function input(char:string) {
    if (expr[expr.length-1] == '+' || expr[expr.length-1] == '-' || expr[expr.length-1] == '*' || expr[expr.length-1] == '/') {
        if (char == '+' || char == '-' || char == '*' || char == '/') {
            expr = expr.slice(0,-1);
            expr += char;
            $(".output").val(expr);
            flag = 0;
            // console.log(expr);
        }
        else {
            expr += char;
            // console.log(expr);
            flag = 0;
            $(".output").val(expr);
        }
    }
    else {
        expr += char;
        // console.log(expr);
        $(".output").val(expr);
    }
}

function displayOutput() {
    $(".output").val(eval(expr));
    expr = eval(expr);
    flag = 1;
}

function resetValues() {
    expr = "";
    $(".output").val("");
}

function deleteLast() {
    if (expr[expr.length-1] == '+' || expr[expr.length-1] == '-' || expr[expr.length-1] == '*' || expr[expr.length-1] == '/') {
        expr = expr.slice(0,-1);
        $(".output").val(expr);
    }
    else if (flag == 1) {
        return;
    }
    else if (flag == 0) {
        expr = expr.slice(0,-1);
        $(".output").val(expr);
    }
}
