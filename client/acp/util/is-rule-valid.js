export function isRuleValid(...fields) {
    for (let field of fields) {
        if (field === null || typeof field === 'string' && field.length === 0) {
            return false;
        }
    }

    return true;
}
