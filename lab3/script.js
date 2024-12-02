// Класс Валюта
class Currency {
    constructor(name) {
        this.name = name; // Название валюты
        this.rates = {}; // Словарь с курсами валюты на разные даты
    }

    addRate(date, rate) {
        this.rates[date] = rate; // Добавляем курс валюты на конкретную дату
    }

    getRate(date) {
        return this.rates[date]; // Получаем курс валюты на указанную дату
    }
}

// Класс Тип расхода/дохода
class Type {
    constructor(name) {
        this.name = name; // Название типа (например, "Еда" или "Зарплата")
    }
}

// Класс Расход
class Expense {
    constructor(value, type, date) {
        this.value = value; // Сумма расхода
        this.type = type; // Тип расхода
        this.date = date; // Дата расхода
    }
}

// Класс Доход
class Income {
    constructor(value, type, date) {
        this.value = value; // Сумма дохода
        this.type = type; // Тип дохода
        this.date = date; // Дата дохода
    }
}

// Класс Бюджет
class Budget {
    constructor() {
        this.currencies = []; // Список валют
        this.expenseTypes = []; // Список типов расходов
        this.incomeTypes = []; // Список типов доходов
        this.expenses = []; // Список расходов
        this.incomes = []; // Список доходов
    }

    // Методы CRUD для валюты
    addCurrency(currency) {
        this.currencies.push(currency); // Добавляем валюту
    }

    getCurrency(name) {
        return this.currencies.find((currency) => currency.name === name); // Получаем валюту по названию
    }

    updateCurrency(name, newCurrency) {
        const index = this.currencies.findIndex((currency) => currency.name === name); // Находим индекс валюты
        if (index !== -1) {
            this.currencies[index] = newCurrency; // Обновляем валюту, если она найдена
        }
    }

    deleteCurrency(name) {
        this.currencies = this.currencies.filter((currency) => currency.name !== name); // Удаляем валюту по названию
    }

    // Методы CRUD для типов расходов
    addExpenseType(type) {
        this.expenseTypes.push(type); // Добавляем тип расхода
    }

    getExpenseType(name) {
        return this.expenseTypes.find((type) => type.name === name); // Получаем тип расхода по названию
    }

    updateExpenseType(name, newType) {
        const index = this.expenseTypes.findIndex((type) => type.name === name); // Находим индекс типа расхода
        if (index !== -1) {
            this.expenseTypes[index] = newType; // Обновляем тип расхода, если он найден
        }
    }

    deleteExpenseType(name) {
        this.expenseTypes = this.expenseTypes.filter((type) => type.name !== name); // Удаляем тип расхода по названию
    }

    // Методы CRUD для типов доходов
    addIncomeType(type) {
        this.incomeTypes.push(type); // Добавляем тип дохода
    }

    getIncomeType(name) {
        return this.incomeTypes.find((type) => type.name === name); // Получаем тип дохода по названию
    }

    updateIncomeType(name, newType) {
        const index = this.incomeTypes.findIndex((type) => type.name === name); // Находим индекс типа дохода
        if (index !== -1) {
            this.incomeTypes[index] = newType; // Обновляем тип дохода, если он найден
        }
    }

    deleteIncomeType(name) {
        this.incomeTypes = this.incomeTypes.filter((type) => type.name !== name); // Удаляем тип дохода по названию
    }

    // Методы CRUD для расходов
    addExpense(expense) {
        this.expenses.push(expense); // Добавляем расход
    }

    getExpenses() {
        return this.expenses; // Возвращаем список расходов
    }

    updateExpense(index, newExpense) {
        if (index >= 0 && index < this.expenses.length) {
            this.expenses[index] = newExpense; // Обновляем расход по индексу, если он валиден
        }
    }

    deleteExpense(index) {
        this.expenses.splice(index, 1); // Удаляем расход по индексу
    }

    // Методы CRUD для доходов
    addIncome(income) {
        this.incomes.push(income); // Добавляем доход
    }

    getIncomes() {
        return this.incomes; // Возвращаем список доходов
    }
    updateIncome(index, newIncome) {
        if (index >= 0 && index < this.incomes.length) {
            this.incomes[index] = newIncome; // Обновляем доход по индексу, если он валиден
        }
    }

    deleteIncome(index) {
        this.incomes.splice(index, 1); // Удаляем доход по индексу
    }

    // Метод Баланс - расчет баланса за период
    getBalance(startDate, endDate) {
        let incomeTotal = 0; // Общий доход
        let expenseTotal = 0; // Общий расход

        this.incomes.forEach((income) => {
            if (income.date >= startDate && income.date <= endDate) {
                incomeTotal += income.value;
            }
        }); 

        this.expenses.forEach((expense) => {
            if (expense.date >= startDate && expense.date <= endDate) {
                expenseTotal += expense.value;
            }
        });

        return incomeTotal - expenseTotal; // Возвращаем разницу между доходами и расходами
    }

    // Метод Фильтр - выбор доходов/расходов за период
    filterEntries(startDate, endDate, typeFilter) {
        if(typeFilter == "Доходы") {
            const filteredIncomes = this.incomes.filter(
                (income) =>
                    income.date >= startDate &&
                    income.date <= endDate
            ); // Фильтруем доходы по дате и типу
            return { incomes: filteredIncomes }; // Возвращаем отфильтрованные доходы и расходы
        }
            
        else if(typeFilter == "Расходы") {
            const filteredExpenses = this.expenses.filter(
                (expense) =>
                    expense.date >= startDate &&
                    expense.date <= endDate
            ); // Фильтруем расходы по дате и типу

            return {  expenses: filteredExpenses };
        }

    }
}