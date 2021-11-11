const internalErrorServer = (res, error) => {
    console.error(error)
    return res.status(500).json({ message: 'Internal Error Server.' })
}

const created = (res, values) => {
    return res.status(201).json(values)
}

const badRequest = (res, values) => {
    return res.status(400).json(values)
}

const ok = (res, values) => {
    return res.status(200).json(values)
}

module.exports = {
    badRequest,
    internalErrorServer,
    created,
    ok
}