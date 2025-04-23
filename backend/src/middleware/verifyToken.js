const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET_KEY;

const verifyToken = (req, res, next) => {   
    try {
        const token = req.cookies.token; // Check both cookie and authorization header
        
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, JWT_SECRET);
        if(!decoded) {
            return res.status(401).send({ message: 'Unauthorized' });
        }   
        req.userId = decoded.userId;
        req.role = decoded.role; // Add role to request object if needed
        next();
        
        
    } catch (error) {
        console.error('Token verification failed:', error);
        return res.status(401).json({ message: 'Unauthorized' });
        
    }
}
module.exports = verifyToken;