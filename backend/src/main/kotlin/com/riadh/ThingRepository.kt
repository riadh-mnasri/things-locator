package com.riadh

import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ThingRepository : CrudRepository<Thing, Long> {
    fun findByName(name: String): Thing?
}
