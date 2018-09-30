let i = 0;

module.exports = handler = (req, res) => {
    if (req.url !== '/favicon.ico') {
        i++;
    }

    res.end(`Hello, World! ${i}`);
};
