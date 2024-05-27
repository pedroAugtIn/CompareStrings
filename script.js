const answer = document.querySelector('.answer');

function check() {
    const c1 = document.getElementById('first').value;
    const c2 = document.getElementById('second').value;
    const dif = c1.length - c2.length;

    let verification = true;
    let errors = 0;

    if (c1 === '' || c2 === '') {
        answer.innerHTML = 'Please, fill both of the fields!';
        return;
    }

    if (dif < -1 || dif > 1) {
        verification = false;
    } else if (c1.length === c2.length) {
        for (let i = 0; i < c1.length; i++) {
            if (c1[i] !== c2[i]) {
                errors++;
                if (errors > 1) {
                    verification = false;
                    break;
                }
            }
        }
    } else {
        let i = 0;
        let j = 0;
        while (i < c1.length && j < c2.length) {
            if (c1[i] !== c2[j]) {
                errors++;
                if (errors > 1) {
                    verification = false;
                    break;
                }

                c1.length > c2.length ? i++ : j++;
            } else {
                i++;
                j++;
            }
        }
    }

    answer.innerHTML = verification;
}

document.querySelector('.btn').addEventListener('click', check);