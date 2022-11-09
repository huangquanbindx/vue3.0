import Mock from 'mockjs' // 引入mockjs
import { data } from './resData/tableData'

Mock.mock('/data/index', 'post', data) // 根据数据模板生成模拟数据