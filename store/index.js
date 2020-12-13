import Portfolio from '@/constants/Portfolio'

export const state = () => ({
	currentItem: 1,
	portfolio: Portfolio
})

export const getters = {
	currentPortfolioItem: state => {
		if (state.currentItem != null) {
			return state.portfolio.find (item => item.id === state.currentItem)
		} else {
			return {}
		}
	}
}

export const actions = {
	setCurrentPortfolioItem (context, item) {
		context.commit ('setCurrentPortfolioItem', item)
	},
}

export const mutations = {
	setCurrentPortfolioItem (state, item) {
		state.currentItem = Number(item)
	},
}