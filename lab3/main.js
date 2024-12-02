class Currency {
    constructor(name, rates) {
        this.hame = name;
        this.rates = [];
    }

}

class RatesOfCurrency {
    constructor(buy, sell, date) {
        this.buy = buy;
        this.sell = sell;
        this.date = date;
    }

}

class ExpenseType {
    constructor(name) {
        this.name = name;
    }

}

class IncomeType {
    constructor(name) {
        this.name = name;
    }

}

class Expense {
    constructor(value, type, date, currency) {
        this.value = value;
        this.type = type;
        this.date = date;
        this.currency = currency;
    }

}

class Income {
    constructor(value, type, date, currency) {
        this.value = value;
        this.type = type;
        this.date = date;
        this.currency = currency;
    }

}

class Budget {
    constructor(currencies, expenseType, incomeType, expense, income) {
        this.currencies = [];
        this.expenseTypes = [];
        this.incomeTypes = [];
        this.expenses = [];
        this.incomes = [];
    }

    //CRUD для валюты
    setCurrency(currency) {
        this.currencies.push(currency);
    }
    getCurrency() {
        return this.currencies;
    }
    updateCurrency(index, newCurrency) {
        this.currencies[index] = newCurrency;
    }
    deleteCurency(index) {
        this.currencies.splice(index, 1);
    }

    //CRUD для типов расходов
    setExpenseType(expenseType) {
        this.expenseTypes.push(expenseType);
    }
    getExpenseType() {
        return this.expenseTypes;
    }
    updateExpenseType(index, newExpenseType) {
        this.expenseTypes[index] = newExpenseType;
    }
    deleteExpenseType(index) {
        this.expenseTypes.splice(index, 1);
    }

    //CRUD для расходов
    setExpense(expense) {
        this.expenses.push(expense);
    }
    getExpense() {
        return this.expenses;
    }
    updateExpense(index, newExpense) {
        this.expenses[index] = newExpense;
    }
    deleteExpense(index) {
        this.expenses.splice(index, 1);
    }

    //CRUD для типов доходов
    setIncomeType(incomeType) {
        this.incomeTypes.push(incomeType);
    }
    getIncomeType() {
        return this.incomeTypes;
    }
    updateIncomeType(index, newIncomeType) {
        this.incomeTypes[index] = newIncomeType;
    }
    deleteIncomeType(index) {
        this.incomeTypes.splice(index, 1);
    }

    //CRUD для доходов
    setIncome(income) {
        this.incomes.push(income);
    }
    getIncome() {
        return this.incomes;
    }
    updateIncome(index, newIncome) {
        this.incomes[index] = newIncome;
    }
    deleteIncome(index) {
        this.incomes.splice(index, 1);
    }
}

const budget = new Budget();