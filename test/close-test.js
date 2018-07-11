module.exports.close = function (factory, test, testCommon) {
  testCommon = testCommon || require('./common')
  test('test close()', function (t) {
    var db = factory()

    db.open(function (err) {
      t.error(err)
      t.throws(
        db.close.bind(db)
        , { name: 'Error', message: 'close() requires a callback argument' }
        , 'no-arg close() throws'
      )
      t.throws(
        db.close.bind(db, 'foo')
        , { name: 'Error', message: 'close() requires a callback argument' }
        , 'non-callback close() throws'
      )

      db.close(function (err) {
        t.error(err)
        t.end()
      })
    })
  })
}
