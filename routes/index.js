var express = require('express');
var router  = express.Router();

/* GET home page.
 * This page will contain the following:
 *  - A text box and button to create a meeting
 *  - Locally stored list of meetings they have created
 *  - A text box and button to go to a schedule page for a meeting (accepts Meeting ID)
 */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'When To Meet' });
});

/* GET Schedule Page
 * This page will contain the following:
 *  - ID of meeting
 *  - A link to this schedule page to share
 *  - A link to the results page to share (share with facebook for added flare)
 *  - A table for selecting availability
 *  - A text box for name
 *  - A submit button
 *  - Comment section? Bonus feature
 */
router.get('/schedule', function (req, res, next) {
    res.render('schedule', { title: 'Schedule' });
});

/* GET results page.
 * This page will contain the following:
 *  - Table of users and selected times
 *  - Comment section? Bonus feature
 *  - Close meeting button? Bonus feature
 */
router.get('/results', function (req, res, next) {
    res.render('results', { title: 'Results' });
});

/* GET tutorial page.
 * This page will contain the following:
 * - Audio/video clip of how to use.
 * - Text-based walk-through.
 */
router.get('/tutorials', function (req, res, next) {
    res.render('tutorials', { title: 'Tutorials' });
});

module.exports = router;
