//your JS code here. If required.
function hello() {
    const inputVal = Number(document.getElementById('ip').value);

    return new Promise((res) => {
        setTimeout(() => {
            res(inputVal);
        }, 2000);
    })

    .then((resolvedData) => {
        document.getElementById('output').textContent =
            `Result:${resolvedData}`;

        return new Promise((res) => {
            setTimeout(() => {
                res(resolvedData * 2);
            }, 2000);
        });
    })

    .then((resolvedData) => {
        document.getElementById('output').textContent =
            `Result:${resolvedData}`;

        return new Promise((res) => {
            setTimeout(() => {
                res(resolvedData - 3);
            }, 2000);
        });
    })

    .then((resolvedData) => {
        document.getElementById('output').textContent =
            `Result:${resolvedData}`;

        return new Promise((res) => {
            setTimeout(() => {
                res(resolvedData / 2);
            }, 2000);
        });
    })

    .then((resolvedData) => {
        document.getElementById('output').textContent =
            `Result:${resolvedData}`;

        return new Promise((res) => {
            setTimeout(() => {
                res(resolvedData + 10);
            }, 2000);
        });
    })

    .then((resolvedData) => {
        document.getElementById('output').textContent =
            `Final Result:${resolvedData}`;
    });
}