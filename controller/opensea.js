const { getCollectionsETH } = require('../helpers/getCollectionsETH');

const getSlugs = async (req, res) => {
  try {
    console.log('entro');
    const slugs = await getCollectionsETH();
    res.json({
      ok: true,
      size: slugs.length,
      slugs,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
};

module.exports = {
  getSlugs,
};
