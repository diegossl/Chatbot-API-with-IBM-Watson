module.exports = {
  get (name) {
    return process.env[`${name}`]
  }
}