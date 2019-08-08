const express = require('express');
const settingCtrl = require('./../controllers/settingController');
const expenseCtrl = require('./../controllers/expenseController');

const router = express.Router();

/* api for setting page */
router
	.get('/total_budget', settingCtrl.getBudget)
	.post('/update_budget', settingCtrl.updateBudget);

router
	.get('/all_categories', settingCtrl.getAllCategories)
	.post('/add_category', settingCtrl.addCategory)
	.delete('/delete_category', settingCtrl.deleteCategory);


/* api for expense page */
router
	.get('/budget_overview', expenseCtrl.budgetOverview)
	.get('/all_expenses', expenseCtrl.getAllExpenses)
	.post('/add_expense', expenseCtrl.addExpense)		
	.put('/edit_expense', expenseCtrl.editExpense)
	.delete('/delete_expense', expenseCtrl.deleteExpense);

module.exports = router;