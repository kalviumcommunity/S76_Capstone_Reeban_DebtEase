
const express = require('express');
const router = express.Router();
const Debt = require('../models/Debt');
router.post('/', async (req, res) => {
    try {
      const { userId, amount, interestRate, dueDate } = req.body;
      const newDebt = new Debt({ userId, amount, interestRate, dueDate });
      const savedDebt = await newDebt.save();  // ✅ save and return it
      res.status(201).json({ message: 'Debt added successfully', debt: savedDebt });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });
  
  
  router.get('/:userId', async (req, res) => {
    try {
      const debts = await Debt.find({ userId: req.params.userId });
      res.status(200).json(debts);
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  router.put('/:id', async (req, res) => {
    try {
      const updatedDebt = await Debt.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).json(updatedDebt);
    } catch (err) {
      res.status(500).json({ error: 'Failed to update debt' });
    }
  });
    

module.exports = router;
