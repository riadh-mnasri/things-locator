package com.riadh

fun ThingDTO.toEntity(): Thing {
    return Thing(this.id, this.name, this.location)
}
