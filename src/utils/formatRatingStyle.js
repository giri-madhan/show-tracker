const formatRatingStyle = (rating) => {
    if (rating) {
        if (rating === 10) return 'rgb(0, 255, 0)'
        if (rating === 9) return 'rgb(50, 240, 0)'
        if (rating === 8) return 'rgb(100, 220, 0)'
        if (rating === 7) return 'rgb(150, 200, 0)'
        if (rating === 6) return 'rgb(200, 180, 0)'
        if (rating === 5) return 'rgb(250, 160, 0)'
        if (rating < 5) return 'rgb(255, 0, 0)'
    }
}
export default formatRatingStyle