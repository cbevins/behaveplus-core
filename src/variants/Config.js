/**
 * @file Config class
 * @copyright 2020 Systems for Environmental Management
 * @author Collin D. Bevins, <cbevins@montana.com>
 * @license OSL-3.0 Open Software License v. 3.0
 * @version 0.1.0
 * #coverage-20200506
 */
import { Option } from './Option.js'

/**
 * Config is an Option Variant whose sole purpose is to define
 * Dag configuration optionswith its own specialized 'instanceof'==='Config'
 */
export class Config extends Option {}
