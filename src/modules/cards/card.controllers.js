const Card = require('./card.module');

// Add Card
const addCard = async (req, res) => {
	try {
		const card = await Card.create(req.body);
		if (!card) {
			return res.status(400).json({ message: "Invalid card data" });
		}
		res.status(201).json(card);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Get All Cards
const getAllCards = async (req, res) => {
	try {
		const cards = await Card.find();
		res.status(200).json(cards);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

// Update Card by ID
const updateCardById = async (req, res) => {
	try {
		const { id } = req.params;
		const card = await Card.findByIdAndUpdate(id, req.body);
		if (!card) {
			return res.status(404).json({ message: "Card not found" });
		}
		const updatedCard = await Card.findById(id);
		res.status(200).json(updatedCard);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
};

module.exports = {
	addCard,
	getAllCards,
	updateCardById
};