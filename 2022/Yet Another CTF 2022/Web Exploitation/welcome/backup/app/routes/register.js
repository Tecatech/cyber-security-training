const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    if (req.app.get('env') === 'development') {
        console.log(req.body);
    }

    var { name, age, city, affilation } = req.body;

    if (!name) {
        res.send({type: 'error', code: 'NONAME', description: 'Заполните имя'});
        return;
    }

    if (!age) {
        res.send({type: 'error', code: 'NOAGE', description: 'Заполните возраст'})
        return;
    }

    if (affilation !== 'yandex') {
        res.send({type: 'error', code: 'YANDEX-ONLY', description: 'К сожалению, в данный момент экскурсии проводятся только для сотрудников'});
        return;
    }

    if (age < 18 || age > 30) {
        res.send({type: 'error', code: 'COVID-RESTRICTION-AGE', description: 'К сожалению, в связи с эпидемией в офис разрешено приходить только людям с 18 до 30 лет'});
        return;
    }

    var handler = require(`../lib/offices/${city}`);
    var { office, error } = handler.save(name, age);
    msg =  error && {type: 'error', code: 'HE-DOESNT-LIKE-YOU', description: error}
                 || {type: 'success', office: office};

    res.send(msg);
});

module.exports = router;
