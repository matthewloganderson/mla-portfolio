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
	nextItem (context) {
		context.commit ('nextItem')
	},
	previousItem (context) {
		context.commit ('previousItem')
	}
}

export const mutations = {
	setCurrentPortfolioItem (state, item) {
		state.currentItem = item
	},
	nextItem (state) {
		if (state.currentItem + 1 <= state.portfolio.length) {
			state.currentItem++
		}
	},
	previousItem (state) {
		if (state.currentItem - 1 > 0) {
			state.currentItem--
		}
	}
}