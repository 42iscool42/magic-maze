export default {
    shuffleArray(a) {
        for (let i = a.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    },

    displayNameForRole(role) {
        const [roleType, cellType] = role.split('-');
        if (cellType === undefined) {
            return roleType;
        }

        const description = cellType === 'odd' ? '(Dark cells)' : '(Light cells)';

        return `${roleType} ${description}`;	
    }
}
