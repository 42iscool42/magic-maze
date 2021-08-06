function Member(id,
                name,
                clock = undefined,
                isSpectator = undefined,
                isBot = false) {
    this.id = id;
    this.name = name;
    this.clock = clock;
    this.isSpectator = isSpectator;
    this.isBot = isBot;
    this.roles = [];
    this.isConnected = true;
}

module.exports = Member;
