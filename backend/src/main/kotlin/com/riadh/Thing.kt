package com.riadh

import javax.persistence.Id
import javax.persistence.Entity


@Entity
data class Thing(@Id val id: Long,
                 val name: String,
                 val location: String?)
