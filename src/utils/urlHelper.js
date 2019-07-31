const getUrl = title => {
  let url;
  if (title === 'Original Art') {
    url = 'art/original-art';
  } else if (title === 'Fan Art') {
    url = 'art/fan-art';
  } else if (title === 'Commissions') {
    url = 'art/commissions';
  } else if (title === 'Home') {
    url = '';
  } else {
    url = title;
  }
  return url;
};

export default getUrl;
