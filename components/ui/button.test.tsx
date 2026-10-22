import { render, screen } from '@testing-library/react'
import { Button } from './button'

describe('Button', () => {
  it('ラベルが表示される', () => {
    render(<Button>クリック</Button>)
    expect(screen.getByRole('button', { name: 'クリック' })).toBeInTheDocument()
  })

  it('disabled のとき操作不能になる', () => {
    render(<Button disabled>送信</Button>)
    expect(screen.getByRole('button', { name: '送信' })).toBeDisabled()
  })

  it('variant が data 属性に反映される', () => {
    render(<Button variant="destructive">削除</Button>)
    expect(screen.getByRole('button', { name: '削除' })).toHaveAttribute(
      'data-variant',
      'destructive'
    )
  })
})
