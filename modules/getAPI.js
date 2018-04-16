(() => {
    const exports = {
        json: (req, res) => {
            res.json({
                int: 9487,
                string: 'hello world',
                array: ['a', 'bb', 'ccc']
            });
        }
    };

    module.exports = exports;
})();
