const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 4000;
const DATA_FILE = 'budget.json';

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// API для получения данных бюджета
app.get('/api/budget', (req, res) => {
    fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading budget data.' });
        }
        res.json(JSON.parse(data || '{}'));
    });
});

// API для сохранения данных бюджета
app.post('/api/budget', (req, res) => {
    const budgetData = req.body;
    fs.writeFile(DATA_FILE, JSON.stringify(budgetData, null, 2), (err) => {
        if (err) {
            return res.status(500).json({ error: 'Error saving budget data.' });
        }
        res.json({ message: 'Budget saved successfully!' });
    });
});

// API для удаления записи дохода
app.delete('/api/income/:id', (req, res) => {
    fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading budget data.' });
        }
        const budget = JSON.parse(data || '{}');
        budget.incomes = budget.incomes.filter((_, index) => index !== parseInt(req.params.id));
        fs.writeFile(DATA_FILE, JSON.stringify(budget, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error saving budget data.' });
            }
            res.json({ message: 'Income deleted successfully!' });
        });
    });
});

// API для удаления записи расхода
app.delete('/api/expense/:id', (req, res) => {
    fs.readFile(DATA_FILE, 'utf-8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error reading budget data.' });
        }
        const budget = JSON.parse(data || '{}');
        budget.expenses = budget.expenses.filter((_, index) => index !== parseInt(req.params.id));
        fs.writeFile(DATA_FILE, JSON.stringify(budget, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error saving budget data.' });
            }
            res.json({ message: 'Expense deleted successfully!' });
        });
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
