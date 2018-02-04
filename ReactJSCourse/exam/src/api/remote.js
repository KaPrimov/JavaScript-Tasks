const host = 'http://localhost:5000/';

async function register(name, email, password) {
    const res = await fetch(host + 'auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    return await res.json();
}

async function login(email, password) {
    const res = await fetch(host + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    });
    return await res.json();
}

async function getYearData(year) {
    const res = await fetch(host + 'plan/' + year, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
    });
    return await res.json();
}

async function getMonthData(year, month) {
    const res = await fetch(host + 'plan/' + year + '/' + month, {
        method: 'GET',
        headers: {
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
    });
    return await res.json();
}

async function updateMonthData(year, month, income, budget) {
    const res = await fetch(host + `plan/${year}/${month}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body: JSON.stringify({income, budget})
    });
    return await res.json();
}

async function addExpenseData(year, month, expenseData) {
    const res = await fetch(host + `plan/${year}/${month}/expense`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        },
        body: JSON.stringify(expenseData)
    });
    return await res.json();
}

async function deleteExpense(id) {
    const res = await fetch(host + `plan/expense/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer ' + localStorage.getItem('authToken')
        }
    });
    return await res.json();
}

export { register, login, getYearData, getMonthData, updateMonthData, addExpenseData, deleteExpense };