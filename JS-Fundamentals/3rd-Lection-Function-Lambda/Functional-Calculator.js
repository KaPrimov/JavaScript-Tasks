function calculator([a, b, option]) {
    [a,b] = [a,b].map(Number);
    switch (option){
        case '+': return a + b; break;
        case '/': return a / b; break;
        case  '*': return a * b; break;
        case '-': return a - b; break;
        default: return 'error';
    }
}